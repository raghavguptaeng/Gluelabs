import React, { Component } from 'react'

export default class DoingCard extends Component {
    render() {
        return (
            <div>
                <div class="card w-96 bg-secondary text-primary-content">
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
