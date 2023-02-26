import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { ChangeEvent, Component, FormEvent } from "react"
import { pushDataFromUser } from "../../services/dataOperation"

type Props = {
    onTrue: any
    onClose: any
}

type State = {
    payeeName: string
    product: string
    price: number
    setDate: string
}

class ExpenseTracker extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            payeeName: "",
            product: "",
            price: 0,
            setDate: this.setDefaultDate()
        }

        this.setpayee = this.setpayee.bind(this)
        this.setProduct = this.setProduct.bind(this)
        this.setProduct = this.setProduct.bind(this)
        this.loggedDate = this.loggedDate.bind(this)
    }

    setDefaultDate = () => {
        const today = new Date();
        return today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    }

    setpayee = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            payeeName: event.target.value
        })
    }

    setProduct = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            product: event.target.value
        })
    }

    setPrice = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            price: parseInt(event.target.value)
        })
    }

    loggedDate = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value)
        // console.log(typeof (e.target.value))

        this.setState({
            setDate: e.target.value,
        })
    }

    submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        // console.log(this.state)
        const finalDate = {
            ...this.state
        }
        const data = await pushDataFromUser(finalDate)
        // console.log(data)
        this.props.onTrue()
    }

    el = document.createElement('div')

    render() {

        const element = (
            <>
                <section>
                    <header className="text-center">
                        <h3>Add New Item</h3>
                    </header>
                    <form onSubmit={this.submitHandler}>

                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Name*</label>
                            <select name="Name" id="Name" required value={this.state.payeeName} onChange={this.setpayee} className="form-control">
                                <option value="" defaultChecked disabled>Choose</option>
                                <option value="Rahul">Rahul</option>
                                <option value="Ramesh">Ramesh</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="productPurchase" className="form-label">Product purchased*</label>
                            <input type="text" id="productPurchase" className="form-control" placeholder="Write Product or Item Name" required value={this.state.product} onChange={this.setProduct} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price*</label>
                            <input type="number" id="price" className="form-control" placeholder="Price" required value={this.state.price} onChange={this.setPrice} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">date*</label>
                            <input type="date" className="form-control" required value={this.state.setDate} onChange={this.loggedDate} />
                        </div>

                        <button type="button" className="btn btn-danger mx-2 my-2" onClick={this.props.onClose}>Close</button>
                        
                        <button className="btn btn-success mx-2 my-2">Submit</button>
                        <button type="reset" className="btn btn-primary mx-2 my-2">Reset</button>
                        <div className="crossIcon" onClick={this.props.onClose}>
                            <FontAwesomeIcon icon={ faXmark } />
                        </div>
                    </form>
                </section>
            </>
        )

        return element
    }
}
export default ExpenseTracker