import React from 'react';
import {CardText, CardTitle} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Approval} from "mdi-material-ui";
import SseGlobals from "../common/SseGlobals";

// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import Icon from '@material-ui/core/Icon';
//
//
// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > .fa': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

class SseImageThumbnail extends React.Component {
    constructor() {
        super();
    }

    render() {
        const image = this.props.image;
        let name = image.name;
        if (!name) {
            const durl = decodeURIComponent(image.url);
            name = durl.substring(1 + durl.lastIndexOf("/"));
        }
        const {classes} = this.props;
        return (
            <div className="sse-thumbnail vflex flex-align-items-center">
                <img
                    src={image.url.endsWith(".pcd") ? "/pcl_horz_large_neg.png" : SseGlobals.getFileUrl(image.url + "?size=small")}/>
                <div className="w100 text-align-center text-crop">{name}</div>
                <div>
                    {this.props.annotated
                        ? <Approval/>
                        : null}
                </div>

            </div>
        );
    }
}

const styles = {
    card: {
        width: "345px",//<Approval />
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

export default withStyles(styles)(SseImageThumbnail)