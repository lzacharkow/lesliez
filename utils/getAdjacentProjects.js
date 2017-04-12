var _ = require('lodash');

module.exports = getAdjacentProjects;

function makeUrl(group, project) {
    return '/projects/' + group + '/' + project;
}

function getAdjacentProjects(groupId, projectId, content) {
    var groupIndex = _.findIndex(content.projectGroups, ['id', groupId]),
        projectIndex = _.findIndex(content.projectGroups[groupIndex].projects, ['id', projectId]);

    function getPreviousProject() {
        var previousGroupIndex = groupIndex - 1;
            previousProjectIndex = projectIndex - 1;

        if (previousProjectIndex >= 0) {
            return {
                url: makeUrl(groupId, content.projectGroups[groupIndex].projects[previousProjectIndex].id),
                title: content.projectGroups[groupIndex].projects[previousProjectIndex].title
            };

        } else {
            var previousGroup = content.projectGroups[previousGroupIndex] ||
                                _.last(content.projectGroups);
            return {
                url: makeUrl(previousGroup.id, _.last(previousGroup.projects).id),
                title: _.last(previousGroup.projects).title
            };
        }
    }

    function getNextProject() {
        var nextGroupIndex = groupIndex + 1;
            nextProjectIndex = projectIndex + 1;

        if (nextProjectIndex < content.projectGroups[groupIndex].projects.length) {
            return {
                url: makeUrl(groupId, content.projectGroups[groupIndex].projects[nextProjectIndex].id),
                title: content.projectGroups[groupIndex].projects[nextProjectIndex].title
            };

        } else {
            var nextGroup = nextGroupIndex < content.projectGroups.length
                    ? content.projectGroups[nextGroupIndex]
                    : content.projectGroups[0];
            return {
                url: makeUrl(nextGroup.id, nextGroup.projects[0].id),
                title: nextGroup.projects[0].title
            };
        }
    }

    return {
        previous: getPreviousProject(),
        next: getNextProject()
    };
}
