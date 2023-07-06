import './GithubMark.css';

export default function GithubMark({ link }) {
    return (
        <div className="github-mark">
            <a className='github-link' href={link} target='_blank' rel="noreferrer"> 
            </a>
        </div>
    );
}