import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPOST = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<POST, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post_image?: string | null;
  readonly post_title?: string | null;
  readonly post_description?: string | null;
  readonly post_category?: string | null;
  readonly post_price?: string | null;
  readonly post_likes?: string | null;
  readonly post_reviews?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPOST = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<POST, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post_image?: string | null;
  readonly post_title?: string | null;
  readonly post_description?: string | null;
  readonly post_category?: string | null;
  readonly post_price?: string | null;
  readonly post_likes?: string | null;
  readonly post_reviews?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type POST = LazyLoading extends LazyLoadingDisabled ? EagerPOST : LazyPOST

export declare const POST: (new (init: ModelInit<POST>) => POST) & {
  copyOf(source: POST, mutator: (draft: MutableModel<POST>) => MutableModel<POST> | void): POST;
}

type EagerUSER = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<USER, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_image?: string | null;
  readonly user_name: string;
  readonly user_description: string;
  readonly user_email: string;
  readonly user_password: string;
  readonly user_location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUSER = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<USER, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_image?: string | null;
  readonly user_name: string;
  readonly user_description: string;
  readonly user_email: string;
  readonly user_password: string;
  readonly user_location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type USER = LazyLoading extends LazyLoadingDisabled ? EagerUSER : LazyUSER

export declare const USER: (new (init: ModelInit<USER>) => USER) & {
  copyOf(source: USER, mutator: (draft: MutableModel<USER>) => MutableModel<USER> | void): USER;
}