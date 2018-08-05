module.exports = {
  isProduction: process.env.NODE_ENV === 'production',
  isGhPages: !!process.env.GH_PAGES,
};
