import React from "react";
import Workspace, {
  WorkspaceContext,
  WorkspaceDetails,
  WorkspaceFooter,
  WorkspaceHeader,
  WorkspaceMain,
  WorkspaceToolbar
} from "./Workspace";

export default {
  title: "Components|Layout/Workspace"
};

export const Default = () => (
  <Workspace>
    <WorkspaceContext>context</WorkspaceContext>
    <WorkspaceDetails>details</WorkspaceDetails>
    <WorkspaceHeader>header</WorkspaceHeader>
    <WorkspaceFooter>footer</WorkspaceFooter>
    <WorkspaceMain>main</WorkspaceMain>
    <WorkspaceToolbar>toolbar</WorkspaceToolbar>
  </Workspace>
);

Default.story = {
  name: "default"
};

export const ContentInMain = () => (
  <Workspace>
    <WorkspaceContext>context</WorkspaceContext>
    <WorkspaceDetails>details</WorkspaceDetails>
    <WorkspaceHeader>header</WorkspaceHeader>
    <WorkspaceFooter>footer</WorkspaceFooter>
    <WorkspaceMain>
      <p>main</p>
      <p>
        Ullamco tempor aliqua excepteur consectetur duis. Qui incididunt anim
        ipsum minim. Ad in dolore esse sint mollit eiusmod eiusmod non
        cupidatat.
      </p>

      <p>
        Labore dolore commodo amet qui culpa incididunt dolor pariatur.
        Reprehenderit dolor adipisicing ut ullamco veniam ex sint ipsum magna et
        exercitation. Do consectetur cillum est commodo cillum qui anim cillum
        veniam reprehenderit id. Ea esse labore commodo deserunt occaecat in
        officia voluptate sit est nulla. Proident reprehenderit deserunt
        pariatur dolore.
      </p>

      <p>
        Est tempor elit ex aute officia. Ex anim reprehenderit ut non occaecat
        in tempor velit consequat tempor enim proident. Non Lorem labore
        exercitation incididunt in reprehenderit incididunt sint consectetur
        veniam in labore. Do dolor sit Lorem tempor.
      </p>

      <p>
        Commodo dolore laboris minim labore. Commodo laboris eu Lorem laborum
        quis ullamco nostrud duis ullamco qui. Quis ullamco enim ea esse
        deserunt sunt culpa ad mollit mollit laborum. Amet amet elit ex veniam
        qui minim occaecat elit sit ipsum cupidatat ullamco. Labore labore ea
        fugiat nostrud sit. Aliquip incididunt laboris nostrud dolore aliquip
        occaecat velit. Velit aliqua reprehenderit labore et incididunt aliqua
        pariatur do Lorem elit.
      </p>

      <p>
        Aute in proident pariatur nisi deserunt eiusmod velit officia cillum in
        labore dolor fugiat. Veniam tempor ipsum incididunt adipisicing elit eu
        duis cupidatat qui esse veniam est cupidatat. Irure dolore magna duis
        minim nulla laborum eiusmod consequat voluptate sit duis aute.
      </p>

      <p>
        Magna ut deserunt commodo nulla qui incididunt cupidatat do eiusmod
        proident proident et ex. Consequat occaecat irure duis fugiat eu. Nulla
        enim ut aliquip consequat reprehenderit. Cillum eiusmod occaecat
        proident esse deserunt voluptate duis nulla deserunt est. Id ex do et
        eiusmod ullamco sunt ullamco.
      </p>

      <p>
        Est commodo id occaecat do sint ipsum excepteur. Veniam cupidatat qui
        consequat laborum laborum deserunt deserunt mollit minim tempor irure
        et. Sint culpa culpa proident duis duis et in exercitation veniam
        labore. Ad ut ex velit reprehenderit ea ea veniam est duis.
      </p>

      <p>
        Voluptate aliquip quis adipisicing officia incididunt minim ut Lorem
        esse duis. Eiusmod in voluptate eu ex sint. Laboris velit duis nostrud
        adipisicing labore esse dolor adipisicing non esse non incididunt
        consequat excepteur. Eiusmod voluptate quis elit mollit voluptate.
      </p>

      <p>
        Incididunt aliquip eiusmod eiusmod ullamco tempor exercitation esse ut
        laborum exercitation sit. Magna dolore culpa voluptate fugiat labore
        veniam excepteur velit cillum laborum amet et voluptate. Eiusmod cillum
        cillum eiusmod laborum. Enim commodo do nostrud mollit minim tempor ad
        velit ipsum. Anim laborum elit laboris elit minim incididunt nulla sunt
        et culpa.
      </p>

      <p>
        Aute do consectetur laborum exercitation ad in labore laboris aliquip
        exercitation quis aliquip. Irure irure ex quis aliqua cillum deserunt
        cupidatat aute. Non mollit excepteur ea nulla anim minim qui id veniam.
      </p>
    </WorkspaceMain>
    <WorkspaceToolbar>toolbar</WorkspaceToolbar>
  </Workspace>
);

ContentInMain.story = {
  name: "content in main"
};
