import React, { Component } from 'react'

export default class DoingCard extends Component {
    constructor(props) {
        super(props)
        console.log(window.innerWidth);
    }
    render() {
        return (
            <div>
                <div class={`card ${window.innerWidth>=500?'w-96':'w-64'} bg-secondary text-primary-content`}>
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
