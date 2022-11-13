export default {
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateBlobs() {
      let blobs = document.getElementsByClassName("blob");
      for (let blob of blobs) {
        const percentage1 = this.random(25, 75);
        const percentage2 = this.random(25, 75);
        const percentage3 = this.random(25, 75);
        const percentage4 = this.random(25, 75);
        blob.style.borderRadius = `${percentage1}% ${100 - percentage1}% ${
          100 - percentage2
        }% ${percentage2}% / ${percentage3}% ${percentage4}% ${
          100 - percentage4
        }% ${100 - percentage3}%`;
      }
    },
  },
};
