/**
 *
 */

Jx().$package(function(J){
  Robot = new J.Class({extend : tank.Robot},{

    /**
     *robot主循环
     */
    run:function(){
      this.setUI(tank.ui['green']);

      this.loop(function() {
        this.setTurn(10000);
        this.ahead(10000);
      });

    },

    /**
    *看到其他robot的处理程序
    **/
    onScannedRobot:function(e){
      this.fire(5);
    },

    /**
    *被子弹击中的处理程序
    **/
    onHitByBullet:function(e){

    },

    onHitRobot: function(e) {
      var bearing = e.getBearing();
      if (bearing < 10 && bearing > -10) {
        this.fire(5);
      }
    },

    /**
    *和墙碰撞的处理程序
    **/
    onHitWall:function(e){
      this.back(10);
    },

    onRobotDeath:function(e){

    }

  });
});
