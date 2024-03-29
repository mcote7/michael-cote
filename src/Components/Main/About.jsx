import React from "react";
import { SKILLS } from "../../Config/skills";

const About = ({
    darkMode,
    primaryColor,
    isBlueActive,
    isGreenActive,
    isOrangeActive,
    handleMouseMove,
    handleMouseLeave,
}) => {
    return (
        <React.Fragment>
            <div className="col col-sm-12">
                {/* intro */}
                <div className="self-wrap row">
                    <div className="self-img col-lg-6">
                        <span className="back-1"></span>
                        <span className="back-2"></span>
                    </div>
                    <div className="self-text col-lg-6 mt-5">
                        <h3>
                            <i className="fa fa-globe" aria-hidden="true"></i> hello world
                        </h3>
                        <p>i'm michael, a software developer in Seattle.</p>
                    </div>
                </div>

                {/* stats */}
                <div className="stats-wrap row">
                    <div className="col-lg-6">
                        {darkMode ? (
                            <React.Fragment>
                                <div className="git-card">
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&theme=dark&icon_color=${primaryColor.substring(
                                            1
                                        )}&border_color=444444&bg_color=444444&text_color=E1E1E1&title_color=${primaryColor.substring(
                                            1
                                        )}`}
                                        alt="stats"
                                    />
                                </div>
                                <div className="git-card">
                                    <div className="most-used dark">📊 Most used languages</div>
                                    <img
                                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=dark&border_color=444444&bg_color=444444&text_color=E1E1E1"
                                        alt="langs"
                                    />
                                </div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <div className="git-card">
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api?username=mcote7&show_icons=true&icon_color=${primaryColor.substring(
                                            1
                                        )}&theme=graywhite&border_color=e4ebf5&bg_color=e4ebf5&title_color=${primaryColor.substring(
                                            1
                                        )}`}
                                        alt="stats"
                                    />
                                </div>
                                <div className="git-card">
                                    <div className="most-used">📊 Most used languages</div>
                                    <img
                                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=mcote7&hide_title=true&layout=compact&theme=greywhite&border_color=e4ebf5&bg_color=e4ebf5"
                                        alt="langs"
                                    />
                                </div>
                            </React.Fragment>
                        )}
                    </div>

                    <div className="role-card col-lg-6">
                        <div className="role-title">
                            {isBlueActive && <div className="angular blue"></div>}
                            {isGreenActive && <div className="angular green"></div>}
                            {isOrangeActive && <div className="angular"></div>}
                            <div>
                                <p>current role: </p>
                                <p className="sub">software developer @</p>
                            </div>
                        </div>
                        <div className="role-body">
                            <a
                                target="_blank"
                                title="https://videonet.us/"
                                rel="noopener noreferrer"
                                href="https://videonet.us/"
                            >
                                videonet holdings&nbsp;
                                <i className="fa fa-external-link-square" aria-hidden="true"></i>
                            </a>
                            <div className="quote">
                                <small>
                                    We are building secure business solutions using modern
                                    communication tools like video conferencing, live streaming and
                                    real-time screen sharing.
                                </small>
                            </div>
                            <div className="quote via3">
                                <small>check out our platform:</small>
                                <a
                                    target="_blank"
                                    title="https://unity.via3.com/"
                                    rel="noopener noreferrer"
                                    href="https://unity.via3.com/"
                                >
                                    via3&nbsp;
                                    <i
                                        className="fa fa-external-link-square"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* skills */}
                <div
                    className="skills-wrap row"
                    onMouseLeave={(e) => handleMouseLeave(e)}
                    onMouseMove={(e) => handleMouseMove(e)}
                >
                    {SKILLS &&
                        SKILLS.map((sk, idx) => {
                            if (
                                sk === "TypeScript" ||
                                sk === "Angular" ||
                                sk === "SaSS" ||
                                sk === "RxJS"
                            )
                                return (
                                    <div key={idx} className="skill-badge key">
                                        {sk}
                                    </div>
                                );
                            return (
                                <div key={idx} className="skill-badge">
                                    {sk}
                                </div>
                            );
                        })}
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
