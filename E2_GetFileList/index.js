const readdirp = require("readdirp");

module.exports = async function (context, rootDirectory) {
    context.log(`Searching for files under '${rootDirectory}'...`);
    const allFilePaths = [];
    for await (const entry of readdirp(rootDirectory, { type: 'all' })) {
        if (!entry.dirent.isDirectory()) {
            allFilePaths.push(entry.fullPath);
        }
    }
    context.log(`Found ${allFilePaths.length} under ${rootDirectory}.`);
    context.done(null, allFilePaths);
};