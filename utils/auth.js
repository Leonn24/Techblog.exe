// Middleware function to check if a user is authenticated
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect("/login");
      } else {
        next();
    }
  };

  module.exports = withAuth;