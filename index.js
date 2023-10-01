

function receivesAFunction(fun1){
    fun1();
}

function returnsANamedFunction(){
    return function hi(){
        'hello'
    };
}

function returnsAnAnonymousFunction(){
    return function(){"hi"};
}