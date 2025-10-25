var head;
class Node {
    constructor(val){
        this.data = val ;
        this.next = null;
    }
}

function push(newData){
 
    var new_node = new Node(newData);
    new_node.next = head ;
    head = new_node;
}

function insertAfter(pre_node, newData){

    if( pre_node == null ){
             console.log("no previous node");
             return;
    }
    var new_node = new Node(newData) ;
    new_node.next = pre_node.next ;
    pre_node.next = new_node ;
}

function append(newData){

    var new_node = new Node(newData) ;

    if( head == null ){
        head = new Node(newData) ;
         return;
    }
    new_node.next = null ;
 
    var last  = head ; 
    while(last.next != null){
       last = last.next ;
    }
    last.next = new_node ; 
    return ;
}

function printList(){
    
}