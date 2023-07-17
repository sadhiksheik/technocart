import {Component} from 'react'
import InvoiceTable from './components/InvoiceTable'
import './App.css'

class App extends Component {
  state = {date: null, number: '', invoiceDetails: []}

  onNumberChanged = event => {
    this.setState({number: event.target.vale})
  }

  onDateChanged = event => {
    this.setState({number: event.target.vale})
  }

  onFormSubmitted = event => {
    event.preventDefault()
    this.getInvoiceDetails()
  }

  getInvoiceDetails = async () => {
    const url = ''
    const response = await fetch(url)
    this.setState({invoiceDetails: response})
  }

  render() {
    const {number, date, invoiceDetails} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Enter Details</h1>
        <form className="form-cont" onSubmit={this.onFormSubmitted}>
          <div className="input-cont">
            <label className="label" htmlFor="invoiceNumber">
              Invoice Number
            </label>
            <input
              onChange={this.onNumberChanged}
              id="invoiceNumber"
              className="text-input"
              type="text"
              value={number}
            />
          </div>
          <div className="input-cont">
            <label className="label" htmlFor="invoiceDate">
              Invoice Date
            </label>
            <input
              onChange={this.onDateChanged}
              id="invoiceDate"
              className="text-input"
              type="date"
              value={date}
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>

        <InvoiceTable details={invoiceDetails} />
      </div>
    )
  }
}

export default App
