import './GithubMark.css';

export default function GithubMark({ link }) {
    return (
        <a className='github-link' href={link} target='_blank' rel="noreferrer"> </a>
    );
}