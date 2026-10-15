import Card from "./Card"

function Cards2({ data }) {
    return (
        <div className="container">
            {
                data.map( item => 
                <Card 
                    key={ item.id}
                    title={item.title} 
                    description={ item.description} 
                />)
            }
        </div>
    )
}

export default Cards2