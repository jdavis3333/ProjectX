
module.exports = (sequelize, DataTypes)=> {
    var Choices = sequelize.define("Choices", {
        choice_id: DataTypes.INTEGER,
        choice_value: DataTypes.TEXT,
        story_id: DataTypes.INTEGER,
        timestamps: false
    });

    Choices.associate =(models)=>{
        Choices.belongsTo(models.Stories, {
            foreignKey: 'story_id'
            }
        );
    };

    return Choices;
}