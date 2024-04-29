var dialogNode = require("dialog-node");

const dialogNodeShow = (title, message, callback) => {
    dialogNode.warn(message, title, 0, callback);
}

module.exports = dialogNodeShow;

// arkaya atıyor neden olduğuna bakılacak