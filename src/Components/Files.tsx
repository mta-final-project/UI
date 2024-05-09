import { useEffect, useState } from "react";
import { getS3Objects } from "../Services/FilesService";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';



//move the s3 functions to FilesSerice.js

export const Files = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    getS3Objects().then(objects => setObjects(objects || []));
    }, []);

  const renderTree = (paths, path = '') => {
    return Object.keys(paths).map((key, index) => {
      const newPath = `${path}/${key}`.replace(/\//g, '|');
      if (paths[key] instanceof Object) {
        return (
          <TreeItem itemId={newPath} label={key} key={newPath}>
            {renderTree(paths[key], `${path}/${key}`)}
          </TreeItem>
        );
      } else {
        return <TreeItem itemId={newPath} label={key} key={newPath} />;
      }
    });
  };

  const paths = objects.reduce((acc, o) => {
    const pathParts = o.Key.split('/');
    pathParts.reduce((obj, part, i) => {
      if (!obj[part]) {
        obj[part] = i < pathParts.length - 1 ? {} : null;
      }
      return obj[part];
    }, acc);
    return acc;
  }, {});

  return (
    <div className="Files">
      <SimpleTreeView
        aria-label="file system navigator"
        defaultExpanded={['0']}
      >
        {renderTree(paths)}
      </SimpleTreeView>
    </div>
  );
};