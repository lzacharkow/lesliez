var _ = require('lodash');

module.exports = getAdjacentProjectUrls;

function makeUrl(group, project) {
    return '/projects/' + group + '/' + project;
}

function getAdjacentProjectUrls(groupId, projectId, content) {
    var groupIndex = _.findIndex(content.projectGroups, ['id', groupId]),
        projectIndex = _.findIndex(content.projectGroups[groupIndex].projects, ['id', projectId]);

    function getPreviousProject() {
        var previousGroupIndex = groupIndex - 1;
            previousProjectIndex = projectIndex - 1;

        if (previousProjectIndex >= 0) {
            return makeUrl(groupId, content.projectGroups[groupIndex].projects[previousProjectIndex].id);

        } else {
            var previousGroup = content.projectGroups[previousGroupIndex] ||
                                _.last(content.projectGroups);
            return makeUrl(previousGroup.id, _.last(previousGroup.projects).id);
        }
    }

    function getNextProject() {
        var nextGroupIndex = groupIndex + 1;
            nextProjectIndex = projectIndex + 1;

        if (nextProjectIndex < content.projectGroups[groupIndex].projects.length) {
            return makeUrl(groupId, content.projectGroups[groupIndex].projects[nextProjectIndex].id);

        } else {
            var nextGroup = nextGroupIndex < content.projectGroups.length
                    ? content.projectGroups[nextGroupIndex]
                    : content.projectGroups[0];
            return makeUrl(nextGroup.id, nextGroup.projects[0].id);
        }
    }

    return {
        previous: getPreviousProject(),
        next: getNextProject()
    };
}
