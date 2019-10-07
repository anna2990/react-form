import React, { Component } from 'react';


class Foot extends Component {
    render() {
        return (
            <div className="footer">
                <button type="submit" className="btn-primary btn-sign btn-block">Next Step <i class="fas fa-arrow-right"></i> </button>
                    <div class="pt-3">
                        <p>Already have an account? <a href="#">  Sign in</a></p>
                    </div>
            </div>
        );
    }
    
}

export default Foot;