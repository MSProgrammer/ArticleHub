const InvalidAccessException=use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException=use('App/Exceptions/ResourceNotExistException');


class Authorization{
   async verifyPermission(resource,user){
        if(!resource){
            throw new ResourceNotExistException();
        }
        if (user.permission_mode!==1)
        {
           console.log('not admin coming!');
           throw new InvalidAccessException();
        }
    }
}

module.exports=new Authorization();