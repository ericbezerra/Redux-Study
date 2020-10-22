import React from "react";
import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => (
  <div>
    <strong>Módulo {activeModule.title || "X"}</strong>
    <span> Aula {activeLesson.title || "X"}</span>
  </div>
);

export default connect((state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
