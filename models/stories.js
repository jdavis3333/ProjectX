module.exports = (sequelize, DataTypes) => {
    var Stories = sequelize.define("Stories", {
        story_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        story_value: DataTypes.TEXT,
        root_story: DataTypes.BOOLEAN
    }, {timestamps: false});

    Stories.associate = (models) =>{
        Stories.hasMany(models.Choices, {
            foreignKey: 'storyID'
        });
    };
    
    return Stories;
};


