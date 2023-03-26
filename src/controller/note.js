const create = (req, res)=>{
    res.send({
        title:'Technical world',
        author:'Vasu Sharama',
        roll:'Senior flutter developer'
    })
}
const del = (req,res)=>{
    res.send("/note/delete")
}

module.exports={
    create,
    del
}