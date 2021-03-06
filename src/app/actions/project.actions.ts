import { Action } from '@ngrx/store';
import { Project } from '../models/project.interface';
import { Feature } from '../models/feature.interface';
import { UserStory } from '../models/user-story.interface';
import { type } from '../util';

export const ActionTypes = {
    SELECT:                 type('[Project] Select'),
    SELECT_COMPLETE:        type('[Project] Select Complete'),
    GET:                    type('[Project] Get'),
    GET_COMPLETE:           type('[Project] Get Complete'),
    UPDATE:                 type('[Project] Update'),
    UPDATE_COMPLETE:        type('[Project] Update Complete'),
    ADD_FEATURE:            type('[Project] Add Feature'),
    ADD_FEATURE_COMPLETE:   type('[Project] Add Feature Complete'),
    DELETE_FEATURE:         type('[Project] Delete Feature'),
    DELETE_FEATURE_COMPLETE:type('[Project] Delete Feature Complete'),
    ADD_STORY:              type('[Project] Add Story'),
    ADD_STORY_COMPLETE:     type('[Project] Add Story Complete'),
    DELETE_STORY:           type('[Project] Delete Story'),
    DELETE_STORY_COMPLETE:  type('[Project] Delete Story Complete'),
};

export class SelectAction implements Action {
    type = ActionTypes.SELECT;

    constructor(public payload: Project) {}
}

export class SelectCompleteAction implements Action {
    type = ActionTypes.SELECT_COMPLETE;

    constructor(public payload: Project) {}
}

export class GetAction implements Action {
    type = ActionTypes.GET;

    constructor(public payload: string) {}
}

export class GetCompleteAction implements Action {
    type = ActionTypes.GET_COMPLETE;

    constructor(public payload: Project) {}
}

export class UpdateAction implements Action {
    type = ActionTypes.UPDATE;

    constructor(public payload: Project) {}
}

export class UpdateCompleteAction implements Action {
    type = ActionTypes.UPDATE_COMPLETE;

    constructor(public payload: Project) {}
}

export class AddFeatureAction implements Action {
    type = ActionTypes.ADD_FEATURE;

    constructor(public payload: any) {}
}

export class AddFeatureCompleteAction implements Action {
    type = ActionTypes.ADD_FEATURE_COMPLETE;

    constructor(public payload: any) {}
}

export class DeleteFeatureAction implements Action {
    type = ActionTypes.DELETE_FEATURE;

    constructor(public payload: any) {}
}

export class DeleteFeatureCompleteAction implements Action {
    type = ActionTypes.DELETE_FEATURE_COMPLETE;

    constructor(public payload: any) {}
}

export class AddStoryAction implements Action {
    type = ActionTypes.ADD_STORY;

    constructor(public payload: {project: Project, feature: Feature, story: UserStory}) {}
}

export class AddStoryCompleteAction implements Action {
    type = ActionTypes.ADD_STORY_COMPLETE;

    constructor(public payload: any) {}
}

export class DeleteStoryAction implements Action {
    type = ActionTypes.DELETE_STORY;

    constructor(public payload: any) {}
}

export class DeleteStoryCompleteAction implements Action {
    type = ActionTypes.DELETE_STORY_COMPLETE;

    constructor(public payload: any) {}
}

export type Actions
    = SelectAction
    | SelectCompleteAction
    | GetAction
    | GetCompleteAction
    | UpdateAction
    | UpdateCompleteAction
    | AddFeatureAction
    | AddFeatureCompleteAction
    | DeleteFeatureAction
    | DeleteFeatureCompleteAction
    | AddStoryAction
    | AddStoryCompleteAction
    | DeleteStoryAction
    | DeleteStoryCompleteAction;
