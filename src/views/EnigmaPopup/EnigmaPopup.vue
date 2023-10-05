<template>
  <div id="popup-center" :class="[{ show }]">
    <div id="blur" @click="closePopup" />

    <div v-if="!!enigma" id="popup-enigma">
      <div id="popup-header">
        <div id="popup-title">
          # {{ enigma.id }} - {{ enigma.title }}
          <div id="enigma-validation-status">
            <template
              v-if="
                currentUser.answers &&
                currentUser.answers[enigma.id] &&
                currentUser.answers[enigma.id].isApproved === true
              "
            >
              <div class="badge success">VALIDEE</div>
            </template>
            <template
              v-else-if="
                currentUser.answers &&
                currentUser.answers[enigma.id] &&
                currentUser.answers[enigma.id].isApproved === false
              "
            >
              <div class="badge danger">REFUSEE</div>
            </template>
            <template v-else-if="currentUser.answers && currentUser.answers[enigma.id]">
              <div class="badge warning">EN ATTENTE D'APPROBATION</div>
            </template>
            <template v-else>
              <div class="badge danger">NON REPONDU</div>
            </template>
          </div>
        </div>
        <div id="popup-close" @click="closePopup">
          <Icon name="x" />
        </div>
      </div>

      <div id="popup-body">
        <div id="enigma-image">
          <img :src="enigma.image" alt="" />
        </div>
        <template v-if="canUserEnterResponse">
          Votre reponse :
          <div id="enigma-textarea">
            <textarea v-model="response"></textarea>
          </div>
        </template>
        <template v-else>
          <div v-if="currentUser.answers && currentUser.answers && currentUser.answers[enigma.id]" id="enigma-response">
            Votre reponse : <span>{{ currentUser.answers[enigma.id].response }}</span>
          </div>
          <div v-if="isEnigmaEnded && expectedReponse" id="enigma-expected-response">
            Reponse attendue : <span>{{ expectedReponse }}</span>
          </div>
        </template>
      </div>
      <template v-if="canUserEnterResponse">
        <div id="popup-actions">
          <Button color="default" label="Valider" @click="submit" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { Button, Icon } from '@/components';

  export default {
    name: 'EnigmaPopup',
    components: { Button, Icon },
    data() {
      return { response: '' };
    },
    computed: {
      currentUser() {
        return this.$store.state.user;
      },
      enigma() {
        return this.$store.state.app.enigmaPopup.enigma;
      },
      expectedReponse() {
        return this.$store.state.enigmas.find(e => e.id === this.enigma.id).response;
      },
      canUserEnterResponse() {
        const now = Date.now();
        const startDate = Date.parse(this.enigma.startDate) + 8 * 60 * 60 * 1000; // Start at 9:00 am with gmt+1
        const endDate = Date.parse(this.enigma.endDate) + 8 * 60 * 60 * 1000; // Start at 9:00 am with gmt+1
        const currentUser = this.$store.state.user;
        const enigma = this.$store.state.app.enigmaPopup.enigma;
        return (
          now > startDate &&
          now < endDate &&
          (!currentUser.answers || !currentUser.answers[enigma.id] || !currentUser.answers[enigma.id].response)
        );
      },
      isEnigmaEnded() {
        const now = Date.now();
        const endDate = Date.parse(this.enigma.endDate) + 8 * 60 * 60 * 1000; // Start at 9:00 am with GMT+1
        return now > endDate;
      },
      show() {
        return this.$store.state.app.enigmaPopup.show;
      },
    },
    methods: {
      closePopup() {
        this.response = '';
        this.$store.dispatch('closeEnigmaPopup');
      },
      submit() {
        if (this.response !== '') {
          this.$store.dispatch('submitResponse', this.response);
          this.closePopup();
          this.response = '';
        }
      },
    },
  };
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/_colors.scss';

  #popup-center {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1000;

    &.show {
      z-index: 1000;
    }

    #blur {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: $color-background;
      opacity: 0;
      transition: opacity ease 0.3s;
    }

    #popup-enigma {
      display: flex;
      flex-direction: column;
      width: 512px;
      max-width: 80%;
      border-radius: 20px;
      box-shadow: 0 0 20px $color-background;
      background: #ffffff;
      transition: transform ease 0.3s;
      z-index: 2000;

      #popup-header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        padding: 0 20px 0 30px;
        border-bottom: 2px solid $color-white-dark;

        #popup-title {
          display: flex;
          align-items: center;
          flex: 1;

          #enigma-validation-status {
            margin-left: 30px;

            .badge {
              padding: 5px 10px 3px;
              border: 2px solid;
              font-size: 10px;
            }
          }
        }

        #popup-close {
          width: 40px;
          height: 40px;
          padding: 10px;
          cursor: pointer;
        }
      }

      #popup-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 20px;

        #enigma-image {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 80%;
          height: 80%;
          margin-bottom: 20px;

          img {
            max-width: 100%;
            height: 80%;
          }
        }

        #enigma-textarea {
          width: 100%;
          max-width: 100%;
          height: 100px;
          border-radius: 10px;
          background: $color-white;

          textarea {
            width: 100%;
            max-width: 100%;
            height: 100%;
            padding: 20px;
            border: none;
            background: transparent;
            font-family: sans-serif;
            font-size: 16px;
            resize: none;
          }
        }

        #enigma-response span,
        #enigma-expected-response span {
          font-family: sans-serif;
        }
      }

      #popup-actions {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        padding: 0 20px;
        border-top: 2px solid $color-white-dark;

        :deep(.btn) {
          width: 100%;
        }
      }
    }
  }

  // Media Queries pour différents écrans
  @media screen and (max-width: 768px) {
    #popup-enigma {
      #enigma-image {
        width: 80%;
      }
    }
  }

  @media screen and (max-width: 480px) {
    #popup-enigma {
      #enigma-textarea {
        height: 200px; // Ajustez la hauteur selon vos besoins pour les petits écrans.
      }
    }
  }
</style>
