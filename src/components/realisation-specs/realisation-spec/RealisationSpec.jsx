import './RealisationSpec.css';
import React from 'react';
import ImageRealisation from 'components/image-realisation/ImageRealisation';

const RealisationSpec = ({spec}) => {

    return(
        <div className="realisation-spec">
            <div className="realisation-spec-text">
                {spec.title && <h4>{spec.title}</h4>}
                {spec.sections.map((section, index) => {
                    return (
                        <div key={index}>
                            {section.title && <h5 dangerouslySetInnerHTML={{ __html: section.title }}></h5>}
                            {section.paragraphe && section.paragraphe.map( (paragraphe, index) => {
                                return <p key={index} dangerouslySetInnerHTML={{ __html: paragraphe }}></p>
                            })}
                        </div>
                    );
                })}
            </div>
            {(spec.linksGithubs || spec.linksWebsites || spec.image) && <div className="realisation-spec-img">
                <div className="realisation-spec-links">
                    {spec.linksGithubs && <span className="realisation-spec-links-git">
                        {spec.linksGithubs.map((link, index) => {
                            return (
                                <a key={index} href={link.href} target="_blank" title={link.title} rel="noreferrer">{index+1}</a>
                            )
                        })}
                    </span>}
                    {spec.linksGithubs && spec.linksWebsites && <span className="realisation-spec-links-slash">/</span>}
                    {spec.linksWebsites && spec.linksWebsites.map((linkWebsite, index) => {
                        return (
                            <React.Fragment key={index}>
                                <a href={linkWebsite.href} target="_blank" rel="noreferrer">{linkWebsite.text}</a>
                                {index+1 < spec.linksWebsites.length && <span className="realisation-spec-links-slash">/</span>}
                            </React.Fragment>
                        )
                    })}
                    {/*spec.linkWebsite && <a href={spec.linkWebsite.href} target="_blank" rel="noreferrer">{spec.linkWebsite.title}</a>*/}
                </div>
                {spec.image && <ImageRealisation image={spec.image} comeFromSpecs={true}/>}
            </div>}
        </div>
    );

}

export default RealisationSpec;