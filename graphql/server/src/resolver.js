const resolvers = {
  Query: {
    toursForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getToursForHome();
    },
  },
};

module.exports = resolvers;
