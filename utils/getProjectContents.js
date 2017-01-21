var _ = require('lodash');

module.exports = getProjectContents;

function getProjectContents(groupId, projectId, content) {
	var thisGroup = _.find(content.projectGroups, ['id', groupId]),
        thisProject = _.find(thisGroup.projects, ['id', projectId]);

    if (_.isUndefined(thisProject)) {
        return {};
    }

	return {
		content: thisProject.content,
		role: thisGroup.role
	};
}
