export default {
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    if (window.innerWidth < 900) {
      this.mobile = true;
    }
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateBlobs() {
      if (!this.mobile) {
        const blobs = document.getElementsByClassName("blob");
        for (const blob of blobs) {
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
      }
    },
    toggleBlobs() {
      if (window.innerWidth <= 900 && !this.mobile) {
        this.mobile = true;
        const blobs = document.getElementsByClassName("blob");
        for (const blob of blobs) {
          blob.style.borderRadius = "12px";
        }
      } else if (window.innerWidth > 900 && this.mobile) {
        this.mobile = false;
        this.generateBlobs();
      }
    },
  },
};
