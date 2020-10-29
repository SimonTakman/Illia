import React from 'react'

export const Calendar = (props:any) => {
	return (<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M16.0556 1.88889H15.1111V0.944444C15.1111 0.693962 15.0116 0.453739 14.8345 0.276621C14.6574 0.0995036 14.4171 0 14.1667 0C13.9162 0 13.676 0.0995036 13.4988 0.276621C13.3217 0.453739 13.2222 0.693962 13.2222 0.944444V1.88889H5.66667V0.944444C5.66667 0.693962 5.56716 0.453739 5.39005 0.276621C5.21293 0.0995036 4.9727 0 4.72222 0C4.47174 0 4.23152 0.0995036 4.0544 0.276621C3.87728 0.453739 3.77778 0.693962 3.77778 0.944444V1.88889H2.83333C2.08189 1.88889 1.36122 2.1874 0.829864 2.71875C0.298511 3.25011 0 3.97078 0 4.72222V14.1667C0 14.9181 0.298511 15.6388 0.829864 16.1701C1.36122 16.7015 2.08189 17 2.83333 17H16.0556C16.807 17 17.5277 16.7015 18.059 16.1701C18.5904 15.6388 18.8889 14.9181 18.8889 14.1667V4.72222C18.8889 3.97078 18.5904 3.25011 18.059 2.71875C17.5277 2.1874 16.807 1.88889 16.0556 1.88889ZM2.83333 3.77778H3.77778V4.72222C3.77778 4.9727 3.87728 5.21293 4.0544 5.39005C4.23152 5.56716 4.47174 5.66667 4.72222 5.66667C4.9727 5.66667 5.21293 5.56716 5.39005 5.39005C5.56716 5.21293 5.66667 4.9727 5.66667 4.72222V3.77778H13.2222V4.72222C13.2222 4.9727 13.3217 5.21293 13.4988 5.39005C13.676 5.56716 13.9162 5.66667 14.1667 5.66667C14.4171 5.66667 14.6574 5.56716 14.8345 5.39005C15.0116 5.21293 15.1111 4.9727 15.1111 4.72222V3.77778H16.0556C16.306 3.77778 16.5463 3.87728 16.7234 4.0544C16.9005 4.23152 17 4.47174 17 4.72222V6.61111H1.88889V4.72222C1.88889 4.47174 1.98839 4.23152 2.16551 4.0544C2.34263 3.87728 2.58285 3.77778 2.83333 3.77778ZM16.0556 15.1111H2.83333C2.58285 15.1111 2.34263 15.0116 2.16551 14.8345C1.98839 14.6574 1.88889 14.4171 1.88889 14.1667V8.5H17V14.1667C17 14.4171 16.9005 14.6574 16.7234 14.8345C16.5463 15.0116 16.306 15.1111 16.0556 15.1111Z" fill={props.color ? props.color: "white"}/>
	</svg>)
}
