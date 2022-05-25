import React, { Component } from 'react'

export default class ToDoCard extends Component {
    render() {
        return (
            <div>
               <div class={`card ${window.innerWidth>=500?'w-96':'w-64'} bg-primary text-primary-content`}>
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
