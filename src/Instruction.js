import React from 'react';
import './Instruction.css';
import {Link} from 'react-router-dom';

 
export default class Instruction extends React.Component{
    render(){
        return (
            <div className="Instruction-Body">
                <h2>Adoption Instruction</h2>
                <div className="Instruction">
                    <div className="Img-Container">
                        <img src={require('./img/instructionpic.png')} alt="Adopt Me"/>
                    </div>
                    <p>
                        At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.
                    </p>
                    <p>
                        Nor hence hoped her after other known defer his. For county now sister engage had season better had waited. Occasional mrs interested far expression acceptance. Day either mrs talent pulled men rather regret admire but. Life ye sake it shed. Five lady he cold in meet up. Service get met adapted matters offence for. Principles man any insipidity age you simplicity understood. Do offering pleasure no ecstatic whatever on mr directly.
                    </p>
                    <p>
                        Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh. Opinions learning likewise daughter now age outweigh. Raptures stanhill my greatest mistaken or exercise he on although. Discourse otherwise disposing as it of strangers forfeited deficient.
                    </p>
                </div>
                <div className="Btn-Container">
                    <Link to='/adopt'>
                        <button className="Adopt-Btn">Adopt Now</button>
                    </Link>
                </div>
            </div>
        )
    }
}