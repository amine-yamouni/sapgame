<template>
  <div id="deer-container">
    <div class="deer">
      <div class="rocking">
        <div class="head">
          <div class="horns">
            <div class="horn horn-left">
              <div class="line line-one"></div>
              <div class="line"></div>
              <div class="line line-three"></div>
            </div>
            <div class="horn horn-right">
              <div class="line line-one"></div>
              <div class="line"></div>
              <div class="line line-three"></div>
            </div>
          </div>

          <div class="ears">
            <div class="ear ear-left"></div>
            <div class="ear ear-right"></div>
          </div>

          <div class="eyes">
            <div class="eye eye-left"></div>
            <div class="eye eye-right"></div>
          </div>

          <div class="nose"></div>
        </div>

        <div class="body">
          <div class="shadow"></div>
          <div class="hooves">
            <div class="hoof-one">
              <div class="line"></div>
              <div class="anim-part">
                <div class="circle">
                  <div class="circle">
                    <div class="circle">
                      <div class="circle">
                        <div class="circle circle-last"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hoof-two">
              <div class="line-one"></div>
              <div class="line-two"></div>
            </div>
          </div>
        </div>

        <div class="tail">
          <div class="circle">
            <div class="circle">
              <div class="circle">
                <div class="circle">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="legs">
        <div class="leg-left">
          <div class="anim-part">
            <div class="line"></div>
          </div>
        </div>

        <div class="leg-right">
          <div class="anim-part">
            <div class="circle">
              <div class="circle">
                <div class="circle">
                  <div class="circle">
                    <div class="circle">
                      <div class="circle">
                        <div class="circle">
                          <div class="circle">
                            <div class="circle circle-last"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="presents">
      <div class="present present-one"></div>
      <div class="present present-two"></div>
      <div class="present present-two, present-two-right"></div>
      <div class="present present-three"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Deer',
  };
</script>

<style lang="scss" scoped>
  $gray: #f4f4f4;
  $red: #fb5d5d;
  $blue: #82dfe3;
  $blue-light: #e7eff7;
  $blue-dark: #69b2cb;
  $blue-dark-two: #495169;
  $brown: #91655d;
  $brown-two: #835f5a;
  $brown-light: #9c7169;
  $brown-light-two: #aa8275;
  $brown-lighten: #e7beb2;
  $brown-dark: #c39e9a;
  $brown-dark-two: #674a4a;
  $brown-dark-three: #835f5b;
  $yellow: #ffb63c;
  $pink: #e66;

  .deer {
    width: 50px;
    margin: 0 auto;
    position: relative;
  }

  .rocking {
    animation: rocking 0.4s ease-in-out infinite alternate-reverse;
    transform-origin: bottom left;
    position: relative;
    z-index: 1;
  }

  .head {
    position: relative;
    width: 50px;
  }

  .horns {
    animation: rocking 0.4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate-reverse;
    height: 55px;
    position: relative;
    top: 21px;
    width: 50px;

    .horn {
      position: relative;

      &::before {
        background-color: $brown;
        border-radius: 7px 7px 0 0;
        content: '';
        display: block;
        height: 55px;
        position: absolute;
        width: 7px;
        z-index: 1;
      }

      .line {
        background-color: $brown;
        border-radius: 7px 0 0 7px;
        height: 7px;
        width: 20px;
        margin-bottom: 15px;
        position: relative;
        top: 10px;

        &-one {
          width: 15px;
        }

        &-three {
          top: -22px;
          width: 17px;
        }
      }

      &-left {
        top: -7px;
        transform: rotate(-25deg);

        &::before {
          box-shadow: inset 2px 0 0 0 $brown-light;
        }

        .line {
          box-shadow: inset 0 2px 0 0 $brown-light;
          right: 15px;
          transform: rotate(30deg);

          &-one {
            right: 10px;
          }

          &-three {
            box-shadow: inset 0 -2px 0 0 $brown-light;
            right: -3px;
            transform: rotate(160deg);
          }
        }
      }

      &-right {
        bottom: 55px;
        left: 40px;
        transform: rotate(25deg);

        &::before {
          box-shadow: inset -2px 0 0 0 $brown-two;
        }

        .line {
          box-shadow: inset 0 2px 0 0 $brown-two;
          right: -2px;
          transform: rotate(150deg);

          &-three {
            right: 13px;
            transform: rotate(20deg);
          }
        }
      }
    }
  }

  .ears {
    position: absolute;
    top: 70px;

    .ear {
      background-color: $brown;
      border-radius: 100% 50% 50% 50%;
      height: 18px;
      position: relative;
      right: 20px;
      top: 10px;
      transform: rotate(30deg);
      transform-origin: 100%;
      width: 30px;

      &::before {
        background-color: $brown-lighten;
        border-radius: 100% 50% 50% 50%;
        height: 9px;
        content: '';
        display: block;
        left: 5px;
        position: relative;
        top: 5px;
        width: 15px;
      }

      &-left {
        animation: ear-left 2s cubic-bezier(0.6, -0.28, 0.74, 0.05) infinite alternate-reverse;
        transform: rotate(30deg);
      }

      &-right {
        animation: ear-right 2s cubic-bezier(0.6, -0.28, 0.74, 0.05) 2s infinite alternate-reverse;
        left: 10px;
        right: 0;
        top: -8px;
        transform: rotate(160deg);
      }
    }
  }

  .eyes {
    position: absolute;
    top: 90px;
    right: -5px;
    width: 32px;
    z-index: 2;

    .eye {
      background: linear-gradient(0deg, white 50%, $brown-light-two 50%);
      border-radius: 15px;
      height: 15px;
      width: 15px;

      &::before {
        animation: eaves 3s infinite alternate-reverse;
        background-color: $brown-light-two;
        border-radius: 9px 9px 0 0;
        height: 9px;
        content: '';
        display: block;
        position: relative;
        width: 15px;
        top: -1px;
        z-index: 1;
      }

      &::after {
        animation: eyes 3s infinite alternate-reverse;
        background-color: $blue-dark-two;
        border-radius: 5px;
        height: 5px;
        content: '';
        display: block;
        left: 5px;
        position: relative;
        top: -3px;
        transform: translate(3px, 2px);
        width: 5px;
      }

      &-left {
        float: left;
      }

      &-right {
        float: right;
      }
    }
  }

  .nose {
    background-color: $brown;
    border-radius: 0 7px 15px;
    top: 47px;
    height: 18px;
    left: 40px;
    position: relative;
    width: 20px;
    z-index: 2;

    &::before {
      background-color: $red;
      border-radius: 15px;
      content: '';
      display: block;
      height: 14px;
      position: absolute;
      right: -0.5px;
      top: -0.5px;
      width: 16px;
    }

    &::after {
      background-color: white;
      border-radius: 5px;
      content: '';
      display: block;
      height: 2px;
      position: absolute;
      right: 4px;
      top: 2px;
      width: 5px;
    }
  }

  .body {
    background-color: $brown;
    border-radius: 50px 50px 0;
    box-shadow: inset 7px 0 0 0 $brown-light;
    height: 140px;
    position: relative;
    width: 50px;
    z-index: 1;

    &::before {
      background-color: $brown-lighten;
      border-radius: 20px 0 0 20px;
      bottom: 20px;
      box-shadow: inset -7px 0 0 0 $brown-dark;
      content: '';
      display: block;
      height: 65px;
      position: absolute;
      right: 0;
      width: 20px;
    }
  }

  .hooves {
    position: relative;
    bottom: 40px;
    right: 34px;
    box-sizing: inherit;

    .hoof {
      &-one {
        animation: jump 0.3s ease-in-out infinite alternate-reverse;
        left: 10px;
        position: relative;
        top: 70px;
        transform: rotate(25deg);
        transform-origin: 100% 50%;

        .line {
          height: 30px;
          border: 20px solid;
          border-radius: 40px;
          border-color: transparent transparent $brown transparent;
          left: 25px;
          width: 30px;
          position: relative;
          top: 5px;
          transform: rotate(-30deg);
        }

        .anim-part {
          position: relative;
          bottom: 23px;
          left: 81px;
          transform: rotate(-75deg);
          transform-origin: left;
        }

        .circle {
          animation: hoof-one 0.3s ease-in-out infinite alternate-reverse;
          background-color: $brown;
          height: 20px;
          width: 20px;
          border-radius: 30px;
          transform: translateX(3px) rotate(0deg);

          &-last {
            border-radius: 20px 0 0 20px;
            transform: translateX(2px) rotate(0deg);

            &::before {
              content: '';
              display: block;
              border-top: 20px solid $brown-dark-two;
              border-left: 7px solid transparent;
              height: 0;
              left: 10px;
              width: 7px;
              position: relative;
              z-index: 1;
            }

            &::after {
              background-color: $yellow;
              border-radius: 10px;
              bottom: 30px;
              content: '';
              display: block;
              height: 40px;
              left: 19px;
              position: relative;
              width: 9px;
            }
          }
        }
      }

      &-two {
        animation: jump-two 0.3s ease-in-out infinite alternate-reverse;
        left: 55px;
        position: relative;
        top: 10px;
        z-index: -1;

        .line {
          &-one,
          &-two {
            height: 10px;
            border: 20px solid;
            border-radius: 40px;
            border-color: transparent transparent $brown transparent;
            width: 10px;
            position: absolute;
          }

          &-one {
            transform: rotate(-45deg);
          }

          &-two {
            left: 30px;
            transform: rotate(135deg);
          }
        }
      }
    }
  }

  .tail {
    background-color: $brown-light;
    bottom: 0;
    left: 4px;
    position: absolute;
    width: 20px;
    z-index: 0;

    .circle {
      animation: tail 2s cubic-bezier(0, 0.02, 0.9, 2) infinite;
      background-color: $brown-light;
      border-radius: 11px;
      height: 12px;
      position: relative;
      right: 2px;
      transform: rotate(-5deg);
      width: 12px;
    }
  }

  .legs {
    position: relative;

    &::before {
      background: linear-gradient(to left, $brown 50%, $brown-light 50%);
      bottom: 0;
      content: '';
      display: block;
      height: 10px;
      left: 7px;
      position: absolute;
      width: 30px;
      z-index: 0;
    }

    .leg {
      &-left,
      &-right {
        &::before,
        &::after {
          content: '';
          display: block;
          position: absolute;
          z-index: 1;
        }
      }

      &-left {
        .anim-part {
          animation: leg-left 0.4s ease-out infinite alternate-reverse;
          position: relative;
          top: 1px;
          transform: rotate(5deg) translateX(3px);
          transform-origin: right;
          z-index: 2;

          &::before,
          &::after {
            content: '';
            display: block;
            position: absolute;
            z-index: 1;
          }

          &::before {
            height: 16px;
            width: 16px;
            border: 20px solid;
            border-radius: 30px;
            border-color: transparent $brown-dark-three transparent transparent;
            transform: rotate(-45deg);
            top: -17px;
            left: 17px;
          }

          .line {
            background-color: $brown-dark-three;
            height: 25px;
            position: absolute;
            width: 20px;
            left: 51px;
            top: 7px;
            z-index: 2;
            transform: skew(-9deg);
          }

          &::after {
            background-color: $brown-dark-three;
            height: 20px;
            left: 33px;
            top: -20px;
            width: 24px;
          }
        }

        &::after {
          background-color: $brown-dark-two;
          height: 13px;
          left: 48px;
          top: 32px;
          transform: skew(-8deg);
          width: 20px;
          z-index: 2;
        }
      }

      &-right {
        position: relative;
        right: 10px;

        &::before {
          height: 30px;
          width: 38px;
          border: 20px solid;
          border-radius: 40px;
          border-color: $brown transparent transparent transparent;
          transform: rotate(-15deg);
          z-index: 3;
          top: -29px;
          left: 21px;
        }

        .anim-part {
          position: absolute;
          left: 64px;
          bottom: 9px;
          transform: rotate(43deg);
          z-index: 2;

          .circle {
            animation: leg-right 0.4s ease-out infinite alternate-reverse;
            width: 20px;
            height: 20px;
            background-color: $brown;
            border-radius: 20px;
            transform: translateX(4px) rotate(4deg);

            &-last {
              border-radius: 20px 0 0 20px;

              &::before {
                content: '';
                display: block;
                border-bottom: 20px solid $brown-dark-two;
                border-right: 2px solid transparent;
                height: 0;
                left: 15px;
                width: 11px;
                position: relative;
                z-index: 1;
              }
            }
          }
        }
      }
    }
  }

  .presents {
    top: 3px;
    height: 45px;
    margin: 0 auto;
    position: relative;
    width: 110px;

    &::after {
      animation: shadow 0.4s ease-out infinite alternate-reverse;
      background-color: $blue-light;
      bottom: 0;
      border-radius: 7px;
      content: '';
      display: block;
      height: 7px;
      left: -22px;
      position: absolute;
      width: 170px;
    }

    .present {
      border-radius: 4px;
      bottom: 3px;
      position: absolute;
      z-index: 1;

      &::before,
      &::after {
        content: '';
        display: block;
        position: relative;
      }

      &::before {
        border-radius: 4px 4px 2px 2px;
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
        right: 1px;
      }

      &-one {
        background-color: $red;
        height: 45px;
        right: 32px;
        width: 45px;
        z-index: 2;

        &::before {
          background-color: lighten($red, 5);
          height: 12px;
          width: 47px;
        }
      }

      &-two {
        background-color: $blue;
        height: 30px;
        width: 30px;

        &::before {
          background-color: lighten($blue, 5);
          height: 10px;
          width: 32px;
        }

        &::after {
          background-color: $blue-dark;
          bottom: 10px;
          height: 100%;
          left: 7px;
          width: 5px;
        }

        &-right {
          right: 5px;
        }
      }

      &-three {
        background-color: $yellow;
        height: 25px;
        left: 25px;
        margin: auto;
        width: 25px;
        z-index: 2;

        &::before {
          background-color: lighten($yellow, 5);
          height: 8px;
          width: 27px;
        }

        &::after {
          background-color: darken($red, 2);
          bottom: 8px;
          height: 100%;
          left: 13px;
          width: 5px;
        }
      }
    }
  }

  @keyframes tail {
    10% {
      transform: rotate(2deg);
    }
    20% {
      transform: rotate(-5deg);
    }
  }
  @keyframes shadow {
    to {
      width: 185px;
    }
  }
  @keyframes eyes {
    50% {
      transform: translate(3px, 2px);
    }
    60% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes eaves {
    50% {
      transform: translateY(0);
    }
    60% {
      transform: translateY(-1px);
    }
    100% {
      transform: translateY(-1px);
    }
  }
  @keyframes hoof-one {
    to {
      transform: translateX(2px) rotate(5deg);
    }
  }
  @keyframes jump {
    to {
      transform: translateY(-2px) rotate(25deg);
    }
  }
  @keyframes jump-two {
    to {
      transform: translateY(2px);
    }
  }
  @keyframes rocking {
    to {
      transform: rotate(-1deg);
    }
  }
  @keyframes ear-left {
    85% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }
  @keyframes ear-right {
    85% {
      transform: rotate(160deg);
    }
    100% {
      transform: rotate(170deg);
    }
  }
  @keyframes leg-right {
    to {
      transform: translateX(4px) rotate(2deg);
    }
  }
  @keyframes leg-left {
    0% {
      transform: rotate(0deg) translateX(0px);
    }
    50% {
      transform: rotate(5deg) translateX(3px);
    }
  }
</style>
