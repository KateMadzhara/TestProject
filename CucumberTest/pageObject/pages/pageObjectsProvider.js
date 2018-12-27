var PAGE_OBJECT_MAP = {
    "profile": "./profilePage",
    "interests": "./interestsPage",
    "payment": "./paymentPage"

};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);

};
