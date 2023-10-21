<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="title_row">
          <span><img src="@/assets/image/logo.png" alt=""/></span>
          <span>学生管理系统</span>
          <span>系统版本：1.1.0</span>
        </div>
        <div class="title_right">
          <div>欢迎您：admin</div>
          <div>
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                <img class="headImg" src="@/assets/image/head.png" alt="" />
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <a href="https://gitee.com/long-xuejian/dashboard/projects"
                  ><el-dropdown-item>Gitee</el-dropdown-item></a
                >
                <el-dropdown-item divided command="signOut"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="Stretch">
            <span @click="StateSwitching" class="span"
              ><i
                :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
              ></i
            ></span>
          </div>
          <div>
            <!-- 导航组件，递归生成，可以无层级 -->
            <el-menu
              class="el-menu-vertical-demo"
              background-color="#333744"
              router
              :default-active="$route.path"
              text-color="#fff"
              :unique-opened="true"
              :collapse="isCollapse"
              :collapse-transition="false"
            >
              <MenuTree :menuData="menuList"></MenuTree>
            </el-menu>
          </div>
        </el-aside>
        <el-main>
          <!-- 缓存标签 -->
          <keep-alive>
            <!-- 主路由视口 -->
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MenuTree from "@/components/Navigation.vue";
export default {
  data() {
    return {
      isCollapse: false,
      menuList: [
        {
          index: "1",
          icon: "el-icon-menu",
          name: "一级菜单01",
          children: [
            {
              index: "1-1",
              icon: "el-icon-film",
              name: "二级菜单01",
              children: [
                {
                  index: "1-1-1",
                  icon: "el-icon-date",
                  name: "三级菜单01",
                  children: [
                    {
                      index: "1-1-1-1",
                      icon: "el-icon-monitor",
                      name: "四级菜单01",
                    },
                  ],
                },
                {
                  index: "1-1-2",
                  icon: "el-icon-headset",
                  name: "三级菜单02",
                },
              ],
            },
            {
              index: "/ceshi",
              icon: "el-icon-data-line",
              name: "二级菜单02",
            },
          ],
        },
        {
          index: "2",
          icon: "el-icon-s-data",
          name: "一级菜单02",
          children: [
            {
              index: "2-1-1-1",
              icon: "el-icon-monitor",
              name: "四级菜单01",
            },
          ],
        },
        {
          index: "3",
          icon: "el-icon-s-operation",
          name: "一级菜单03",
        },
        {
          index: "4",
          icon: "el-icon-user",
          name: "一级菜单04",
        },
      ],
    };
  },
  components: {
    MenuTree,
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    //导航状态切换
    StateSwitching() {
      this.isCollapse = !this.isCollapse;
    },
    //退出事件
    handleCommand(i) {
      if (i === "signOut") {
        window.sessionStorage.removeItem("token");
        this.$message.success("退出成功");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      padding: 0 0 0 20px;
      background: #373d41;
      display: flex;
      justify-content: space-between;
      .el-dropdown-link {
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
      }
      .headImg {
        width: 58px;
        height: 58px;
        padding: 6px;
        border-radius: 16px;
      }
      .title_right {
        display: flex;
        align-items: center;
        color: white;
        div:nth-child(1) {
          margin-right: 20px;
          font-size: 20px;
        }
        div:nth-child(2) {
          display: flex;
          align-items: center;
          .el-icon-arrow-down {
            color: white;
          }
        }
      }
      .title_row {
        display: flex;
        align-items: center;
        height: 100%;
        span {
          margin-right: 20px;
          color: white;
          img {
            cursor: pointer;
          }
        }
        span:nth-child(1) {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: white;
          padding: 3px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        span:nth-child(2) {
          font-size: 22px;
        }
      }
    }
    .el-aside {
      background: #333744;
    }
    .Stretch {
      height: 26px;
      background: #4a5064;
      .span {
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        i {
          font-size: 26px;
        }
      }
    }
  }
  /deep/.el-menu-item-group__title {
    padding: 0;
  }
  .el-menu {
    border: none;
  }
}
</style>
