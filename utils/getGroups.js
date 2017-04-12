// TODO: Make selector to skip between groups.

var _ = require('lodash');

module.exports = getGroups;

function getGroups(groupId, content) {
    return _.map(content.projectGroups, function(group) {
        return {
            url: '/projects/' + group.id + '/' + _.find(content.projectGroups, ['id', group.id]).projects[0].id,
            title: group.groupName,
            selected: Boolean(group.id === groupId)
        };
    });
}
