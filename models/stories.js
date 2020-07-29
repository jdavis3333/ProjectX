module.exports = (sequelize, DataTypes) => {
    var Stories = sequelize.define("Stories", {
        story_id: DataTypes.INTEGER,
        story_value: DataTypes.TEXT,
        root_story: DataTypes.boolean,
        timestamps: false
    });

    Stories.associate = (models) =>{
        Stories.hasMany(models.Choices, {
            foreignKey: 'storyID'
        });
    };
    
    return Stories;
};


