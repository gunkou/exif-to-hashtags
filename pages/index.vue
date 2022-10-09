<template>
  <v-row justify="center" align="center">
    <v-col style="max-width:600px">
      <v-card class="px-4">
        <v-card-title tag="h1">
          Exif情報をハッシュタグに変更します
        </v-card-title>

        <v-file-input
          accept="image/png, image/jpeg, image/bmp, image/HEIC"
          placeholder="写真をアップロードする"
          prepend-icon="mdi-camera"
          @change="onUpload"
        ></v-file-input>

        <v-img
          class="mt-10 mb-10 mx-auto"
          max-height="150"
          max-width="250"
          alt="プレビュー画像"
          :src="imgSrc"
        ></v-img>

        <v-card
          class="d-flex flex-wrap px-2"
          outlined
        >
          <div class="mx-4">
            <v-switch
            v-model="switchModel"
            label="モデル"
            @change="onChangeShow"
            ></v-switch>
          </div>
          <div class="mx-4">
            <v-switch
            v-model="switchFNumber"
            label="F値"
            @change="onChangeShow"
            ></v-switch>
          </div>
          <div class="mx-4">
            <v-switch
            v-model="switchISO"
            label="ISO"
            @change="onChangeShow"
            ></v-switch>
          </div>
          <div class="mx-4">
            <v-switch
            v-model="switchExposureTime"
            label="シャッタースピード"
            @change="onChangeShow"
            ></v-switch>
          </div>
        </v-card>

        <v-textarea
          class="mt-10"
          outlined
          name="input-7-4"
          label="編集する"
          auto-grow
          v-model="textArea"
        ></v-textarea>

        <v-btn
          elevation="2"
          @click="onCopy"
        >
          Copy
          <v-icon right>mdi-content-copy</v-icon>
        </v-btn>

        <v-expansion-panels class="mt-2">
        <v-expansion-panel>
          <v-expansion-panel-header>
            取得した元データ
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{data}}
          </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import exifr from 'exifr';
import {
  appendHashtag,
  replaceSpace,
  unshiftText,
  pushText,
  changeExposureTimeToShutterSpeed
} from '~/plugins/text.js'

function allTextEdit(data, b) {
  let text = unshiftText(data, b);
  text = pushText(text);
  text = appendHashtag(text);
  text = replaceSpace(text);
  return text;
}

export default {
  name: 'IndexPage',
  data() {
    return {
      imgSrc: 'https://picsum.photos/200/300',
      data: 'データなし',
      textArea: '',
      switchModel: true,
      switchFNumber: true,
      switchISO: true,
      switchExposureTime: true,
    }
  },
  methods: {
    onUpload: async function (file) {
      console.log(file);
      if (file === null) return;
      const exif = await exifr.parse(file);
      const imgSrc = URL.createObjectURL(file);
      this.data = exif;
      this.imgSrc = imgSrc;
      this.onEditText();
    },
    onCopy: function() {
      navigator.clipboard.writeText(this.textArea).then(() => {
        /* clipboard successfully set */
      }, () => {
        /* clipboard write failed */
      });
    },
    onChangeShow: function() {
      if (typeof(this.data) !== 'object') return;
      this.onEditText();
    },
    onEditText: function() {
      const exif = this.data;
      const outPutArr = [];
      if (this.switchModel) {
        outPutArr.push(allTextEdit(exif.Model));
      }

      if (this.switchFNumber) {
        outPutArr.push(allTextEdit(exif.FNumber, 'F'));
      }

      if (this.switchISO) {
        outPutArr.push(allTextEdit(exif.ISO, 'ISO'));
      }

      if (this.switchExposureTime) {
        outPutArr.push(
          allTextEdit(
            changeExposureTimeToShutterSpeed(exif.ExposureTime)
          )
        );
      }

      this.textArea = outPutArr.join(' ');
    }
  }
}
</script>
