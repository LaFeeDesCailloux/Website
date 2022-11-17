export default {
  created() {
    const title = this.getTitle(this);
    if (title) {
      document.title = `${title} | La Fée Des Cailloux`;
    }
  },
  methods: {
    getTitle(vm) {
      const { title } = vm.$options;
      if (title) {
        return typeof title === "function" ? title.call(vm) : title;
      }
    },
  },
};
