const chalk = require("chalk");


class Node {
    constructor(data,nombre,cantidad,costo)
    {
        this.data = data;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.left = null;
        this.right = null;
        this.counter = 0;
    }
}

class BinarySearchTree{
    constructor(data){
        this.root = null;
    }

    insert(data,nombre,cantidad,costo)
    {
        let newNode = new Node(data,nombre,cantidad,costo);

        if(this.root === null)
        {
            this.root = newNode;
        }else
        {
             this.insertNode(this.root, newNode);
        }

    }

    insertNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
            if(node.left === null)
            {
                node.left = newNode;
            }
            else 
            {
                this.insertNode(node.left, newNode);
            }
        }
        else //this.right
        {
            if(node.right === null)
            {
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }


    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(chalk.magenta(node.data));
            this.inorder(node.right);
        }
    }

    preorder(node)
    {
        if(node !== null)
        {
            console.log(node.data);
            this.preorder(chalk.magenta(node.left));
            this.preorder(node.right);
        }
    }

    postorder(node)
    {
        if(node !== null)
        {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(chalk.magenta(node.data));
        }
    }

    searchNode(node, datatobefound)
    {
        if(node === null)
        {
            return null;
        }
        else if (datatobefound < node.data){
          return  this.searchNode(node.left, datatobefound);
        }
        else if(datatobefound > node.data){
          return  this.searchNode(node.right, datatobefound);
        }
        else
        {
            return (chalk.magenta(node));
        }

    }

    getrootnode()
    {
        return this.root;
    }

}



const BST = new BinarySearchTree();


BST.insert(20,"Doritos", 10, 13);
BST.insert(5, "Sabritas", 14, 13);
BST.insert(8, "Cheetos", 15, 11);
BST.insert(15, "Rufles", 10, 12);
BST.insert(19, "Cocacola", 20, 10);
BST.insert(44, "Sprite", 15, 9);
BST.insert(30, "Electrolit", 16, 24);
BST.insert(1, "Jugo", 10, 18);
BST.insert(4, "Agua", 14, 13);
BST.insert(11, "Leche", 11, 14);

const root = BST.getrootnode();
BST.inorder(root);