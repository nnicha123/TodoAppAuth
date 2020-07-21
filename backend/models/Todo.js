module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Todo',{
        title:{
            type:DataTypes.STRING(1000)
        },
        status:{
            type:DataTypes.ENUM('incomplete','completed')
        }
    },{
        tableName:'todos'
    })
    model.associate = models => {
        model.belongsTo(models.User,{foreignKey:'user_id'})
    }
    return model
}