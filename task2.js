console.log("hello task 2 ");
/*
2. Create your own custom object that has getSetGen as function
value, this function should generate setters and getters for the
properties of the caller object
This object may have description property of string value if
needed
Let any other created object can use this function property to
generate getters and setters for his own properties
Avoid generating getters or setters for property of function value
Hint:
if getSetGen() applied on any other object it should generate
getters and setters for all of the applied object properties
i.e. if you have the following object
obj = {id:”SD-10”,location:”SV”, addr:”123 st.”, getSetGen:
function(){/should be implemented/}}
using of getSetGen() will generate the following getId(), setId(),
getLocation(), setLocation(), getAddr(), setAddr().
If you created the following object
var user = { name:”Ali”,age:10}
When applying getSetGen() on user object (you can use call or
bind or apply as long as getSetGen() is not a member for user
*/

function GetsetGen (obj)
{
    for ( var key in obj)
    {
        if ( typeof obj[key] != "function")
        {
            (function (Property)
            {
                obj["get"+Property] = function () 
                {
                    return obj[Property]
                }

                obj ["set"+Property] = function (value) 
                {
                     obj[Property]= value ;
                }
            })(key);

        }
    }
    return obj ; 

}

var user = 
{ name:"Ali",
  age:10
}

GetsetGen(user);

