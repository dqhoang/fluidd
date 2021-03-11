import { GetterTree } from 'vuex'
import { FilesState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<FilesState, RootState> = {
  /**
   * Returns a directory of files and sub-directories.
   */
  getDirectory: (state) => (r: string, path: string) => {
    const root = r as 'gcodes' | 'config' | 'config_examples'
    if (state && state[root]) {
      const dir = state[root].find(o => o.path === path)
      if (dir) {
        return dir
      }
    }
    return []
  },

  /**
   * Indicates if a root is available.
   */
  isRootAvailable: (state, getters, rootState) => (r: string) => {
    return rootState.server?.info.registered_directories.includes(r)
  }
}
