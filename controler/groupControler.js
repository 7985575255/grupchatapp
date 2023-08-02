const User = require('../model/usermodel');
const Group = require('../model/group');
const GroupUser = require('../model/groupUser');
const path = require('path');

exports.createGroup = async (req, res, next) => {
  try {
    const { group_name, participants, created_by } = req.body;

    const group = await Group.create({ group_name: group_name, created_by: created_by });

    const user = await User.findOne({
      where: {
        name: created_by,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await group.addUsers(user, { through: { isAdmin: true } });

    const userObjects = await User.findAll({
      where: {
        name: participants,
      },
    });

    await group.addUsers(userObjects);

    console.log('Group created:', group);
    res.json({ success: true, group });
  } catch (error) {
    console.error('Error creating group:', error);
    res.json({ success: false, error });
  }
};
