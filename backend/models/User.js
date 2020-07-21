module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('User',{
        first_name:{
            type:DataTypes.STRING(255)
        },
        last_name:{
            type:DataTypes.STRING(255)
        },
        age:{
            type:DataTypes.INTEGER
        },
        username:{
            type:DataTypes.STRING(255)
        },
        password:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'users',
        timestamps:false
    })
    model.associates = models => {
        model.hasMany(models.Todo, {foreignKey:'user_id'})
    }
    return model
}