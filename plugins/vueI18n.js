export default (context) => {
  return {
    fallbackLocale: 'en',
    pluralizationRules: {
      /**
       * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
       * @param choicesLength {number} an overall amount of available choices
       * @returns a final choice index to select plural word by
       */
      cs(choice, choicesLength) {
        if (choice === 0) {
          return 0
        }

        if (choice === 1) {
          return 1
        }

        return (choice > 1 && choice) < 5 ? 2 : 3
      },
    },
  }
}
