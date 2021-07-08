export default {
  getFormData(formData: { [x: string]: any; }): { [x: string]: any; } {
    if (formData) {
      return formData;
    }
    return {};
  },
};
