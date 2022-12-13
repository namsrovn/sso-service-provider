const checkAuth = (req, res, next) => {
    const redirectURL = `https://${req.headers.host}`
        // console.log(redirectURL, req.secure, req.headers.host)
    if (req.session.user === null || req.session.user === undefined) {
        return res.redirect(
            `https://sso-identity-provider.onrender.com/cas/login?serviceURL=${redirectURL}`
        )
    }
    return next()
}

module.exports = checkAuth